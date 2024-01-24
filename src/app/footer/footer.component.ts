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
    // Replace 'your_resume_url' with the actual URL of your resume file
    const resumeUrl = '../assets/files/Rajkumar-Subramanian-Resume.pdf';
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Rajkumar-Subramanian-Resume.pdf'; // Set the desired file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
