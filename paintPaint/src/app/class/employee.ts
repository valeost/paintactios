
import { Gender } from "./gender";
import { Country } from "./country";
import { Language } from './language';
export class Employee {
	constructor(
		public id: number,
		public name: string,
		public surname: string,
		public surname2: string,
		public sex: string,
		public countryId: number,
		public phone: string,
		public datebirthday: string,
        public lastModification: string
	) { }




}
