
interface Task {
  task: () => Promise<String>;
  resolve: (value: String) => void | Promise<void>;
  reject: (value: String) => void | Promise<void>;
}

class SuperTask {

  private paralle: number;
  private tasks: Task[];
  private running: number;

  constructor(paralle = 2) {
    // 任务并发数量
    this.paralle = paralle;
    // 存储任务的列表
    this.tasks = [];
    // 当前正在执行的任务
    this.running = 0;
  }

  // 添加任务
  add(task: () => Promise<String>) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject
      })
      this._run();
    });
  }

  // 执行任务
  _run() {
    while (this.running < this.paralle && this.tasks.length > 0) {
      const { task, resolve, reject } = this.tasks.shift() as Task;
      this.running++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this.running--;
          this._run();
        });
    }
  }
}

function timeout(timeout: number) {
  return new Promise<String>((resolve) => {
    setTimeout(() => {
      resolve("work well");
    }, timeout);
  });
}

const superTask = new SuperTask();
function addTask(time: number, name: number) {
  superTask.add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`)
    })
}


function work() {
  addTask(1000, 1);
  addTask(1000, 2);
  addTask(1000, 3);
  addTask(1000, 4);
  addTask(1000, 5);
  addTask(1000, 6);
}

export default {
  work
}

