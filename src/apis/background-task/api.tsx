interface i_job {
  run: () => void;
  cancel: () => void;
}

export class Job implements i_job {
  run = () => {
    // requestIdleCallback()
  };

  cancel = () => {
    // cancelIdleCallback()
  };
}

export function createJob() {
  return new Job();
}

interface i_queue {
  add: (job: Job) => void;
}

export class Queue implements i_queue {
  taks: Array<Job> = [];

  add = (job: Job) => {
    this.taks.push(job);
  };
}

export function createQueue() {
  return new Queue();
}
