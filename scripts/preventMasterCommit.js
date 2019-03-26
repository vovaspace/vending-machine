import gitBranchIs from 'git-branch-is';

gitBranchIs('master').then(
  result => {
    if (result) {
      console.log('🌶  You are trying to commit to the master branch!');
      console.log('   Don\'t do that!');
      process.exit(1);
    }
    console.log('👌 Preventing master commit is OK :)');
    process.exit(0);
  },
  err => { console.log(err); process.exit(1); }
);
