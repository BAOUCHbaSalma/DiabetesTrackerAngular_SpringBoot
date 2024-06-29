export interface Glycemie{
  idGlycemie:number
  valeurBefore:number
  valeurAfter:number
  date:String
  heurs:String
  diabetiques:Diabetique

}

export interface Diabetique{
  idDiabetiques:number
  nameDiabetiques:String
  poids:number
  taille:number
  genre:String
  ageDiabetiques:number
  valuesGlycemies:Array<Glycemie>


}
