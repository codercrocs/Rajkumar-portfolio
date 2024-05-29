import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  downloadFile() {
    const resumeUrl = '../assets/files/SubramanianRajkumarResume.pdf';
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'SubramanianRajkumarResume.pdf'; // Set the desired file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
