import { inject, Injectable } from '@angular/core'
import { Prompt } from './prompt.model'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class PromptService {
  httpClient = inject(HttpClient)
  baseUrl = environment.apiUrl + 'prompts'

  getPrompts(): Observable<Prompt[]> {
    return this.httpClient.get<Prompt[]>(this.baseUrl)
  }

  getPrompt(promptId: number): Observable<Prompt> {
    return this.httpClient.get<Prompt>(`${this.baseUrl}/${promptId}`)
  }

  createPrompt(prompt: { title: string; content: string; categoryId: number }): Observable<Prompt> {
    return this.httpClient.post<Prompt>(this.baseUrl, prompt)
  }

  updatePrompt(promptId: number, prompt: { title: string; content: string; categoryId: number }): Observable<Prompt> {
    return this.httpClient.put<Prompt>(`${this.baseUrl}/${promptId}`, prompt)
  }

  deletePrompt(promptId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${promptId}`)
  }

  upvotePrompt(promptId: number): Observable<Prompt> {
    return this.httpClient.post<Prompt>(`${this.baseUrl}/${promptId}/upvote`, null)
  }

  downvotePrompt(promptId: number): Observable<Prompt> {
    return this.httpClient.post<Prompt>(`${this.baseUrl}/${promptId}/downvote`, null)
  }
}
