import { Card, Typography } from "@material-tailwind/react";
import SeeDetailButton from "../SeeDetailButton";
 
const TABLE_HEAD = ["CAR MODEL", "TOTAL RUN", "CONDITION", "ASKING PRICE",""];
 
const TABLE_ROWS = [
  {  
     url:"data:image/jpeg;base64,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",
     car_model: "Honda Cr-V 2021",
    total_run: "22409/Km",
    condition: "Greate",
    asking_price: "2$30,450",
  },
  { 
     url:"data:image/jpeg;base64,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",
     car_model: "Honda Cr-V 2021",
     total_run: "22409/Km",
     condition: "Greate",
     asking_price: "2$30,450",
  },
  {
    url:"data:image/jpeg;base64,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",
    car_model: "Honda Cr-V 2021",
    total_run: "22409/Km",
    condition: "Greate",
    asking_price: "2$30,450",
  },
  {

     url:"data:image/jpeg;base64,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",
     car_model: "Honda Cr-V 2021",
     total_run: "22409/Km",
     condition: "Greate",
     asking_price: "2$30,450",
  },
  {

     url:"data:image/jpeg;base64,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",
     car_model: "Honda Cr-V 2021",
     total_run: "22409/Km",
     condition: "Greate",
     asking_price: "2$30,450",
  },
];
 
export function RegularCollectionTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ url,car_model,total_run, condition, asking_price }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={car_model}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <div style={{ display: 'flex'}}>
                      <img src={url} alt={"car_model"} className="mr-2 w-16 h-16" />  
                      <h className="font-bold text-2xl">
                      {car_model}
                      </h>

                    </div>
                   
                  
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {total_run}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {condition}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {asking_price}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                   <SeeDetailButton/>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}