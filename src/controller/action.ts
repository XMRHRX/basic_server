import { Request } from 'express';
import { Tags, Post, Route, Controller } from 'tsoa';

@Tags('Action')
@Route('action')
export class ActionController extends Controller {
}
