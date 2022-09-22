let tahun = 2016;

if(tahun % 4 == 0 && tahun % 100 != 0){
    console.log('Kabisat')
}else if(tahun % 400 == 0){
    console.log('Kabisat')
}else{
    console.log('Bukan Kabisat')
}