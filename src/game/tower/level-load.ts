import { getOptions, getTextures } from './level-mapping';
import levelsOriginCode from './level-config';

function getConfig(shortName: string) {
  let configList = shortName.split('-');
  let textureName = configList[0];
  let counts = configList[1] || 1;
  return {
    textureName,
    counts
  }
}

/**
 * get texture  by a shortcut name
 * @param shortConfigName eg: b1-10 => options: TEXTURE_NAME.background[0], counts: 10
 */
function getTextureOption(shortName: string) {
  let config = getConfig(shortName);
  let textures = getTextures(config.textureName[0])
  let optionName = textures[config.textureName[1]];
  let option = getOptions(optionName);
  return option;
}

function shortNameToList(shortName: string): string[] {
  let config = getConfig(shortName);
  let list = [];
  for (let i = 0; i < config.counts; i++) {
    list.push(config.textureName);
  }
  return list;
}

function elementsCodeToOptions(elementsCode: string[][]): { [key: string]: any }[][] {
  let elementsOptions: { [key: string]: any }[][] = [];
  for (let r = 0; r < elementsCode.length; r++) {
    const row = elementsCode[r];
    elementsOptions[r] = [];
    for (let c = 0; c < row.length; c++) {
      elementsOptions[r][c] = getTextureOption(row[c]);
    }
  }
  return elementsOptions
}

function getLevelCode (levelIndex: number): null | {bg: string, elements: string[][]} {
  if (levelIndex >= 0 && levelIndex < levelsOriginCode.length) {
    let level = levelsOriginCode[levelIndex];
    let bg: string = level[0][0] as string;
    let elements: string[][] = [];
    for (let r = 0; r < level[1].length; r++) {
      const row = level[1][r];
      elements[r] = [];
      for (let c = 0; c < row.length; c++) {
        let condeList = shortNameToList(row[c]);
        elements[r] = elements[r].concat(condeList);
      }
    }
    return {
      bg,
      elements
    }
  }
  return null;
}

export { getLevelCode, elementsCodeToOptions, getTextureOption};