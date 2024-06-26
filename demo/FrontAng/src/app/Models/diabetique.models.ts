export interface Glycemie{
  idGlycemie:Number
  valeurBefore:Number
  valeurAfter:Number
  date:String
  heurs:String
  diabetiques:Diabetique

}

export interface Diabetique{
  idDiabetiques:Number
  nameDiabetiques:String
  poids:Number
  taille:Number
  genre:String
  ageDiabetiques:Number
  valuesGlycemies:Array<Glycemie>


}
