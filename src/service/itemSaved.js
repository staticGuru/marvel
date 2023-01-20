
//Get the item saved status
function isItemSaved(charecter,savedList){
return savedList?.some(char=>char.id ===charecter.id);
}
export default isItemSaved;
