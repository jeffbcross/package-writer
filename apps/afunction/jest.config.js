module.exports = {
  name: 'afunction',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/afunction',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
