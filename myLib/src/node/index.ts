import { Blob } from "buffer"
import { MyUsefulType, myFunc as myFuncDeclaration } from "../common/types.js"

export const myFunc: typeof myFuncDeclaration = () => {
  const myObject: MyUsefulType = {
    myProp: "aNodeObject"
  }

  return { ...myObject, blob: new Blob([""]) }
}
