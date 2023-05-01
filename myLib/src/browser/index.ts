import { MyUsefulType, myFunc as myFuncDeclaration } from "../common/types.js"

export const myFunc: typeof myFuncDeclaration = () => {
  const myObject: MyUsefulType = {
    myProp: "aBrowserObject"
  }

  return { ...myObject, file: new File([new Blob()], "myFile") }
}
