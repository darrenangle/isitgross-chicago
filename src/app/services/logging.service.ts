// Logging as a service, to allow for TODO: later connection with third-party or external logging
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  activityLog: string[] = [];
  errorLog: string[] = [];

  // General Activity Logging
  logActivity (activity: string) {
    // this.activityLog.push(activity);
    console.log('[App Activity]: ' + activity);
  }

  clearActivityLog() {
    this.activityLog = [];
  }

  // Error Logging
  logError(error: string) {
    // this.errorLog.push(error);
    console.log('[Error]: ' + error);
  }

  clearErrorLog() {
    this.errorLog = [];
  }
  constructor() { }

}
