
enum months{
    Jan=1, Feb, Mar, Apr, May, Jun,Jul,Aug,Sep,Oct,Nov,Dec
}


export const dateToString=(date:string):string=>{
  //date-->  Sat Mar 26 2022 15:16:12 GMT-0500 (Peru Standard Time);

  const cortes = date.toString().split(" ");
  // cortes --> ['Sat', 'Mar', '26', '2022', '15:16:35', 'GMT-0500', '(Peru', 'Standard', 'Time)']
  const mes:any=cortes[1];

  return cortes[3]+'-'+months[mes]+'-'+cortes[2];
}



