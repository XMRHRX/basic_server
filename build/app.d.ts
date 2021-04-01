import { Express } from "express";
import { ConnectionOptions } from 'typeorm';
export default function AppInit(typeormConfig: ConnectionOptions): Promise<Express>;
