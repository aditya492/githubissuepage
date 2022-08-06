
//function for Calculate days/hours 

export const timeCalculation=(receivedDate,todayDate)=>{
      // get total seconds between the times
      var mstoseconds = Math.abs(receivedDate - todayDate) / 1000;

      // calculate (and subtract) whole days
      var days = Math.floor(mstoseconds / 86400);
      mstoseconds -= days * 86400;

      // calculate (and subtract) whole hours
      var hours = Math.floor(mstoseconds / 3600) % 24;
      mstoseconds -= hours * 3600;

      // calculate (and subtract) whole minutes
      var minutes = Math.floor(mstoseconds / 60) % 60;
      mstoseconds -= minutes * 60;

        let stringFormat=receivedDate.toString();
      const ifmorethanmonth=stringFormat.slice(3,15)

      return{hours,days,ifmorethanmonth}
}