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
    this.error = '';
  }

  onSubmit() {
    if (this.postData.title === '') {
      this.error = 'Please enter title!';
      return;
    } else if (this.postData.description === '') {
      this.error = 'Please enter description!';
      return;
    } else if (this.postData.date === '') {
      this.error = 'Please enter publish date!';
      return;
    }
    this.loading = true;
    this.error = '';
    this.http.post('/api/posts/', this.postData).subscribe(() => {
      this.router.navigateByUrl('/posts');
      this.loading = false;
    }, (error) => {
      console.log(error);
      this.loading = false;
      this.error = 'Couldn\'t create post, please try again..';
    });
  }

  onFileChange($event) {
    const reader = new FileReader();
    if ($event.target.files && $event.target.files.length) {
      const [file] = $event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.postData.image = reader.result;
      };
    }
  }
}
