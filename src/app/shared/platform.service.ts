import { Injectable } from "@angular/core";

export abstract class PlatformService {
  abstract get platformName(): string;
}

@Injectable()
export class ClientPlatformService {
  get platformName() {
    return 'CLIENT';
  }
}

@Injectable()
export class ServerPlatformService {
  get platformName() {
    return 'SERVER';
  }
}
