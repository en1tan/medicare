import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

const apiUrl = 'http://localhost:3000/patients'

export interface IPatient {
  name: string;
  age: number;
  phoneNumber: string;
  homeAddress: string;

}

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  // Get all patients
  getAll(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(`${apiUrl}`).pipe(
      tap(_ => { console.log(`Fetched: all patients`); })
    );
  }

  // Get  a patient
  getPatient(id: string): Observable<IPatient> {
    return this.http.get<IPatient>(`${apiUrl}/${id}`).pipe(
      tap(_ => { console.log(`Fetched one patient`); })
    );
  }

  // Add patient
  addPatient(patientData: IPatient): Observable<IPatient> {
    return this.http.post<IPatient>(`${apiUrl}`, patientData).pipe(
      tap(_ => { console.log(`Added one patient`); })
    );
  }

  // Add several patients
  addManyPatients(patientsData: IPatient[]): Observable<IPatient[]> {
    return this.http.post<IPatient[]>(`${apiUrl}`, patientsData).pipe(
      tap(_ => {
        console.log(`Add more patients`);
      })
    );
  }

  editOnePatient(id: string, updatedData: IPatient): Observable<IPatient> {
    return this.http.patch<IPatient>(`${apiUrl}/${id}`, updatedData).pipe(
      tap(_ => { console.log(`Updated Patient`);
      })
    )
  }

  deletePatient(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`).pipe(
      tap(_ => {
        console.log(`Deleted Patient`)
      })
    );
  }
}
