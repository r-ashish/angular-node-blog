import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './postcreate.html'
})

export class PostCreateComponent {
  public postData;
  public loading;
  public error;

  constructor (
    private http: HttpClient,
    private router: Router
  ) {
    this.postData = {
      title: '',
      description: '',
      image: null,
      date: ''
    };
    this.loading = false;
    this.error = false;
  }

  onSubmit() {
    console.log(this.postData);
    this.loading = true;
    this.error = false;
    this.http.post('/api/posts/', this.postData).subscribe(() => {
      this.router.navigateByUrl('/posts');
      this.loading = false;
    }, (error) => {
      console.log(error);
      this.loading = false;
      this.error = true;
    });
  }

  onFileChange($event) {
    const reader = new FileReader();
    if ($event.target.files && $event.target.files.length) {
      const [file] = $event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.postData.patchValue({
          file: reader.result
        });
      };
    }
  }
}
