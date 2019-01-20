import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'chatbot',
        component: ChatbotComponent
      }
    ])
  ],
  declarations: [ChatbotComponent],
  exports:[ChatbotComponent]
})
export class BootModule { }
