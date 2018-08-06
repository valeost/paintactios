
import { Gender } from "./gender";
import { Country } from "./country";
import { Language } from './language';
import { Phone } from "./phone";
export class Person {
	constructor(
		public id: number,
		public name: string,
		public surname?: string,
		public surname2?: string,
		public sex?: Gender,
		public country?: Country,
		public phone?: Phone,
		public datebirthday?: string,
        public lastModification?: string,
        public language?: Language
	) { }




}