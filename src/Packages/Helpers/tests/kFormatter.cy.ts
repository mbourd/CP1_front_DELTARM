import { kFormatter } from '../src';

describe('Assert Packages/Helpers/src/kFormatter.ts', () => {
  it('Should format with ","', () => {
    expect(kFormatter('2')).to.deep.equal('2');
    expect(kFormatter('23')).to.deep.equal('23');
    expect(kFormatter('233')).to.deep.equal('233');
    expect(kFormatter('2333')).to.deep.equal('2,333');
    expect(kFormatter('23333')).to.deep.equal('23,333');
    expect(kFormatter('233333')).to.deep.equal('233,333');
    expect(kFormatter('2333333')).to.deep.equal('2,333,333');
  });

  it('Should have the correct number of ","', () => {
    expect(kFormatter('2').split(',').length).to.be.equal(1);
    expect(kFormatter('23').split(',').length).to.be.equal(1);
    expect(kFormatter('233').split(',').length).to.be.equal(1);
    expect(kFormatter('2333').split(',').length).to.be.equal(2);
    expect(kFormatter('23333').split(',').length).to.be.equal(2);
    expect(kFormatter('233333').split(',').length).to.be.equal(2);
    expect(kFormatter('23333333').split(',').length).to.be.equal(3);
  });
});
