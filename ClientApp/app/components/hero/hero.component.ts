
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// import { Power, Hero } from './hero';
import { HeroService } from './hero.service';
import { normalizeCamelCase } from '../../utilities/camelCaseNormalizer';

@Component({
  templateUrl: './hero.component.html'
}) 
export class HeroComponent { 
  form: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService) {
      this.form = fb.group({
        name: [''],
        address: fb.group({
          street: [''],
          city: ['']
        }),
        powers: fb.array([])
      });
  }

  save() {
      this.heroService.save(this.form.value).subscribe(
      res => {
        console.log("SUCCESS", res.json());
      },
      err => {
        var errors = err.json();
        console.log("Errors", errors);

        for (var key in errors) {
          var control = this.form.get(normalizeCamelCase(key));
          control.setErrors({
            'remote': errors[key].join()
          });
        }
      });
  }

  addPower(input) {
    if (!input.value)
      return;

    var powers = <FormArray> this.form.get('powers');
    var newPower = this.fb.group({ 
      name: [input.value]
    });
    powers.push(newPower);

    input.value = '';
  }
}