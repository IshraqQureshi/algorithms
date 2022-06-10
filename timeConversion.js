const timeConversion = (s) => {

    const time = s.includes('PM') ? s.split('PM') : s.split('AM')
    let [hour, minutes, seconds] = time[0].split(':')
    
    if( hour == 12 ) hour = '00';

    if( s.includes('PM') ) hour = parseInt(hour) + 12

    return `${hour}:${minutes}:${seconds}`

}

console.log(timeConversion('12:59:59PM'))