import { element } from 'protractor';
import { BootService } from '../boot.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  msg: string;
  resultados: Message[]

  constructor(private chatBoot: BootService) { }

  ngOnInit() {
    this.initBoot();
  }

  initBoot() {
    this.resultados = []
    this.chatBoot.getResponse('HI')
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp })
        });
      })
  }

  sendMessage() {
    this.resultados.push({ remetente: 'ko', mensagem: this.msg , data: new Date()})
    console.log(this.msg);
    console.log(this.removerAcentos(this.msg));
    this.chatBoot.getResponse(this.removerAcentos(this.msg))
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp })
        });
      })

    this.msg = '';
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  //'뷁'(NFC 방식) 또는 'ㅂㅞㄺ'(NFD 방식) 중 하나로 바꿔 사용

  private removerAcentos(s) {
    console.log("NFD 변환" + s.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

  }

}

interface Message {
  remetente: string;
  mensagem: string;
  data: Date;

}