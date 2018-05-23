export class CommitFile {
  public status: string;
  public fileName: string;

  constructor(status: string, fileName: string) {
    this.status = status;
    this.fileName = fileName;
  }
}