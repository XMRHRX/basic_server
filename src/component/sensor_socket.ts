import { spawn } from 'child_process';

export class SensorSocket {
  private message = 'start detect';
  private host = '127.0.0.1';
  private port = '13370';
  private tool = 'nc';
  // nc 127.0.0.1 13370 -c 'echo hi'                                                                                                 ''
  private generateArgument(list: string[], message: string){
    let command = '';
    for(const content of list){
      command += content + ' ';
    }
    command += `-c echo '${message}'`
    return command
  }
  public signalSensor(){
    // const argument = this.generateArgument([this.host, this.port], this.message);
    // console.log(argument);
    const cat = spawn(this.tool, [this.host, this.port, 'echo', '-c', this.message])
    // exec(command, (error, stdout, stderr) => {
    cat.stdout.on('data', (data)=>{
      console.log(`stdout: ${data}`);
    })
      // let failFlag = false;
      // if (error) {
          // console.log(`error: ${error.message}`);
          // return 1;
      // }
      // if (stderr) {
          // console.log(`stderr: ${stderr}`);
          // return 1;
      // }
      // console.log(`stdout: ${stdout}`);
      // return 0;
// });

  }
}
