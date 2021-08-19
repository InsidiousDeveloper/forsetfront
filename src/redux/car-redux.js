// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
  switch (action.type) {
    case "multiple":
      // console.log({...action.payload})

      /// the problem must be here...................................
      /// if can, work with multiple dispatches

      return {
        ...state,
        ...action.payload,
      };
    case "carsInfo":
      return {
        ...state,
        carsInfo: action.payload,
      };
    case "filter":
      return {
        ...state,
        filter: {
          max: Math.max.apply(
            null,
            action.payload.map((item) => {
              return item.cost;
            })
          ),
          min: Math.min.apply(
            null,
            action.payload.map((item) => {
              return item.cost;
            })
          ),
        },
      };
    case "allBrands":
      console.log(action.payload);
      return {
        ...state,
        allBrands: action.payload.map((item) => {
          return Object.keys(item);
        }),
      };
    case "modelbrand":
      return {
        ...state,
        modelbrand: action.payload
      }
    case "color":
      return {
        ...state,
        allColors: action.payload,
      };
    case "modalBox":
      return {
        ...state,
        modalBox: action.payload,
      };
    default:
      throw new Error("Something went wrong");
  }
}
