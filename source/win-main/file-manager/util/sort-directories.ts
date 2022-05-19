/**
 * @ignore
 * BEGIN HEADER
 *
 * Contains:        sortDirectories
 * CVM-Role:        Utility Function
 * Maintainer:      Jason Lu
 * License:         GNU GPL v3
 *
 * Description:     A utility function that sorts a given array of directories.
 *                  The function should be passed the array and a string determining
 *                  how to sort the array.
 *
 * END HEADER
 */

import { DirMeta } from '@dts/common/fsal'

/**
 * Returns a sorted array of directories
 *
 * @param   {DirMeta}   dirArray         The directories to be sorted
 * @param   {string}    sortBy           How to sort the directories
 *
 * @return  {DirMeta[]}                  The sorted array
 */
export default function sortDirectories (dirArray: DirMeta[], sortBy: string = 'AlphaA'): DirMeta[] {
  function compareByAlpha (a: DirMeta, b: DirMeta): number {
    // get names of directory in lowercase due to ASCII values
    let nameA = a.name.toLowerCase()
    let nameB = b.name.toLowerCase()
    let compareResult = 0
    if (nameA === nameB) {
      // if directories have the same name, compare the names of the directory they are in
      if(a.dir > b.dir)
        compareResult = 1
      if(a.dir < b.dir)
        compareResult = -1
    } else {
      // else compare regularly
      if(nameA > nameB)
        compareResult = 1
      if(nameA < nameB)
        compareResult = -1
    }
    // return array in reverse alphabetical order if sortBy is AlphaD
    return compareResult * (sortBy === 'AlphaA' ? 1 : -1)
  }

  return dirArray.sort(compareByAlpha)
}
