
//Get the item saved status
function isItemSaved(charecter,savedList){
console.log(charecter)
return savedList?.some(char=>char.id ===charecter.id);
}
export default isItemSaved;
