import { Injectable } from "@angular/core";
import { Country } from "../class/country";
import { DataService } from "./data.service";
import { Person } from "../class/person";
import { Employee } from "../class/employee";
import { Gender } from "../class/gender";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Phone } from "../class/phone";

@Injectable()

export class ModeldataService {
    employees: Employee[];
    countries: Country[];
    genders: Gender[];
    country: Country;
    prefix: number;
    gender: Gender;
    person: Person;
    phone: Phone;
    persons: Person[];

    constructor(private employeeService: DataService) {

    }
    public mapToPersonClass(): Person[] {
        this.persons = [];
        this.employeeService.getDataSource().then(data => {
            this.countries = data['country'];     
            this.genders = data['sex'];
            this.employeeService.getPersonData().then((data: Employee[]) => {
                this.employees = data;
                this.employees.map((employee: Employee) => {
                    let empTem : Employee = new Employee(employee.id, employee.name, employee.surname, employee.surname2, employee.sex, employee["country-id"],employee.phone, employee.datebirthday, employee.lastModification);
                    this.getContry(empTem.countryId);
                    this.getGender(empTem.sex);
                    this.phone = new Phone(empTem.phone, this.country.prefix);
                    this.person = new Person(
                        empTem.id, 
                        empTem.name, 
                        empTem.surname, 
                        empTem.surname2, 
                        this.gender,
                        this.country,
                        this.phone,
                        empTem.datebirthday,
                        empTem.lastModification
                    );
                    console.log('PERSON', this.person);
                    this.persons.push(this.person);
                })
                
                
            });

        });

        
        return this.persons;
    }

    public getContry(id: number){
   
        this.country = this.countries.find(res => res.id == id);
  

    }
    public getGender(key: string) {
        this.gender = this.genders.find(res => res.key == key);
    }

    public searchByWord(word: string): Person[]{
        let findPersons = [];
        word = word.toLowerCase();
        this.persons.map(
            (person: Person) => {
                let searched = false;
                searched = person.name.toLowerCase().includes(word) || person.surname.toLowerCase().includes(word) 
                || person.surname2.toLowerCase().includes(word) || person.datebirthday.toLowerCase().includes(word) 
                || person.sex.description.toLowerCase().includes(word)
                || person.phone.number.toLowerCase().includes(word) || person.phone.prefix.toString().toLowerCase().includes(word)
                || person.country.description.toLowerCase().includes(word) || person.lastModification.toLowerCase().includes(word);
                if(searched){
                    findPersons.push(person);
                }
            }
        );
             
        return findPersons;
    }
    
}