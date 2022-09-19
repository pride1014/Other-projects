import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Interface';
import { PersonalService } from '../services/personal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personl-info',
  templateUrl: './personl-info.component.html',
  styleUrls: ['./personl-info.component.scss']
})
export class PersonlInfoComponent implements OnInit {
  form!: FormGroup;

  id!: number;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  user!: User;


  validationMessages = {
    'idNumber': [
      { type: 'required', message: 'Please enter the ID number ' },
      { type: 'minLength', message: 'Please enter a 13 ID number ' },
      { type: 'maxLength', message: 'Please enter a 13 ID number ' }
    ],
    'Name': [
      { type: 'required', message: 'Please enter a Name ' },
    ],

    'OTP': [
      { type: 'required', message: 'Please enter the OTP ' },
    ]

  }


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: PersonalService,
    private FormsModule: FormsModule
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.isAddMode = !this.id;



    this.form = this.formBuilder.group({
      idNumber: [null, [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      Name: ['', Validators.required],
      OTP: [null, [Validators.required]],
    });

    

    if (!this.isAddMode) {
      this.user = this.userService.getUserById(this.id);

      this.form = this.formBuilder.group({
        idNumber: [this.user.idNumber, Validators.required],
        // idNumber : new FormGroup('',Validators.compose([Validators.required, Validators.minLength(13) , Validators.maxLength(13)])),
        Name: [this.user.Name, Validators.required],
        OTP: [this.user.OTP, Validators.required],

      });
    }


  }


  onSubmit() {
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    }

  }

  createUser() {
    const user: User = this.form.value;
    this.userService.addUser(user);
    this.router.navigateByUrl('Identity');
    console.log(user);
  }

  Close() {
    this.form.reset();
    this.router.navigateByUrl('');
  }


}
