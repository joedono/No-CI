export class CommitFile {
  public Status: string;
  public FileName: string;

  constructor(status: string, fileName: string) {
    this.Status = status;
    this.FileName = fileName;
  }
}