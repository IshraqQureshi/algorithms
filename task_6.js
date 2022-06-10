const task_6 = (input) => {

    const regexForYou = /\b(you*|You*|YOU*)\b/g;
    const regexForU = /\b[u]\b/g;

    const replaceForYou =  input.replace(regexForYou, 'your client')
    const replaceForU =  replaceForYou.replace(regexForU, 'your client')

    return replaceForU;

}

console.log(task_6('We have sent the deliverables to YOUUUU.'))