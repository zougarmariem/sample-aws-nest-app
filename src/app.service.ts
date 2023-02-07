import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { GetLogEventsRequest } from 'aws-sdk/clients/cloudwatchlogs';
/* configure AWS */
AWS.config.update({
  region: 'eu-west-1',
  accessKeyId: 'ASIAXZ3FZLLAYT4FOOPL',
  secretAccessKey: 'KK+9uhUos9Yij9tbNTJV9kSb2B219n97nGXtz5/A',
  sessionToken:
    'IQoJb3JpZ2luX2VjENf//////////wEaCWV1LXdlc3QtMSJHMEUCIBEUdj9ohXOcymf1dqTkAoyD47XK+ZG4KEHgIF/MEYnVAiEA/jz5EbOeQbgfBUgeG951ljBGxYUDmoFZ4YimDOStYIcqiwMIYBACGgw1MzY1NDc1MTUwNzMiDETsEz/R+PUTR5qEuSroAuNrltDLqFJ9rUpVrhQBNyxnN6v/NmP6b2eCVIz3MgrN+G0wbBdBBNP2QBuOerNTANnvP3SXUnJG9HXlS3M7GPDF49Qt5yImYFtoa0hoToWtmvFia56NlOooUSnh1M3LjgjH7hEYbg/TpF1JhIce6/1+jHEId1xJKT8RKH2+kegl5pz+UlXCNM0M+6Vr7lGGGN0xQHJi0xQBE1d/I2p6Sk0HWAQMZzwG8VLSi3q5227gUTHnIRxgXw9gd78L3ysDq1W2mFB/2/OJgJPlbsYa/RgmH/leVSjcvxtge4NCgMMtz64RlAuntNIVT2NFs95VPMQtkNQ854oCpN6kAmT2qqvoso9TBRl5lQyQo9S1DVlWQdfU4vAybjm0qe4niUKC1n0MKSZRXs9qOVsKC580LNlqul7A1T38eXBnPFnELXD+Ht6FWnmZfKi+0NkBQ4h8ZBQgtK3lSn0ijLtmsXY5EA56qlqhSh2SzTC+04mfBjqmAWe47xmQZOdQvmx5t+tG7l/zGzKDixAUIYlWnqCIYm937d8NwdKAEeWZlausLFyyqDyhqJTzvSYYOMCvjmSgPNhSgBrVb2iKkTeP+iB6KbVmOFCnxaP2DeqRTIgyROKMJTV2cV9ifY6dY+EB4CyqYxlviitgtCjiVvWV564rpnyGpA5NCbXfWnyKEeXUOdHY4zX9UdCzu8+yLiBBiJO5HaTJLZE62+Y=',
});
@Injectable()
export class AppService {
  /* get all functions  */
  getAllFunctions(): void {
    const lambda = new AWS.Lambda();
    lambda.listFunctions({}, function (err, data) {
      if (err) {
        console.log('err*********', err, err.stack);
        return err;
      } else {
        console.log(' data.Functions', data.Functions);
        return data;
      }
    });
  }

  /* get all logs*/
  getAllLogs(): void {
    const cwlogs = new AWS.CloudWatchLogs({ region: 'eu-west-1' });
    const params: GetLogEventsRequest = {
      logGroupName: '/aws/lambda/dn-p-dndev-lambda-transform-workflow-setup',
      limit: 100,
      startFromHead: true,
      logStreamName: '2023/02/01/[$LATEST]7029d849df424e28a1a927836dc31cb5',
    };
    cwlogs.getLogEvents(params, function (err, data) {
      if (err) console.log('**** errr *******', err, err.stack);
      else console.log('**** success *******', data);
    });
  }
}
