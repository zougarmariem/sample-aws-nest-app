import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class AppService {
  /* */
  getHello(): string {
    const lambda = new AWS.Lambda();
    AWS.config.update({ region: 'us-west-1' });
    lambda.listFunctions({}, function (err, data) {
      if (err) console.log("err",err, err.stack);
      else  return data.Functions;
    });
    return 'Hello World!';
  }
}
