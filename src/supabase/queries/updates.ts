import { CaseUid, Update, UpdateUid } from '../../types/types';
import supabase from '../createClient';

/**
 * Fetch all `Update` objects associated with the target caseUid.
 *
 * @param caseUid target caseUid
 * @returns list of formatted `Update` objects
 */
export async function fetchAllUpdates(caseUid: CaseUid): Promise<Update[]> {
  try {
    // fetch rows with the matching CaseUid
    const { data } = await supabase
      .from('updates')
      .select()
      .eq('caseUUID', caseUid);

    if (!data) {
      throw new Error(`no updates found for the given case: ${caseUid}`);
    }
    // return a list of properly formatted `Updates`s
    const unsortedUpdates = await Promise.all(
      data.map(async queryItem => {
        return await formatUpdate(queryItem);
      }),
    );
    return await sortUpdatesByDate(unsortedUpdates);
  } catch (error) {
    console.warn('(fetchAllUpdates)', error);
    throw error;
  }
}

/**
 * Return a properly formatted `Update` object from the supabase query data.
 *
 * @param queryItem raw form data returned from supabase query
 * @returns formatted `Update` object
 */
export function formatUpdate(item: any): Update {
  const updateData: Update = {
    updateUid: item.updateId,
    caseUid: item.caseUUID,
    title: item.title,
    blurb: item.blurb,
    category: item.category,
    date: item.date,
    summary: item.summary,
    lawFirm: item.lawFirm,
  };
  return updateData;
}

/**
 * Fetch `Update` object associated with the target updateId.
 *
 * @param updateId target updateUid
 * @returns formatted `Update` object
 */
export async function getUpdateById(updateId: UpdateUid): Promise<Update> {
  try {
    const { data } = await supabase
      .from('updates')
      .select()
      .eq('updateId', updateId);
    if (!data) {
      throw new Error('update not found');
    }
    return formatUpdate(data[0]);
  } catch (error) {
    console.warn('(getUpdateById)', error);
    throw error;
  }
}

/**
 * Sort `Update`s array by date.
 *
 * @param updates list of formatted `Update` objects
 * @returns list of formatted `Update` objects sorted by date
 */
export async function sortUpdatesByDate(updates: Update[]): Promise<Update[]> {
  updates.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return updates;
}
