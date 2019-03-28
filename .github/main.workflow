workflow "New workflow" {
  on = "push"
  resolves = ["Create an issue"]
}

action "Create an issue" {
  uses = "JasonEtco/create-an-issue@3b32e1e16d13ce431cc2ad4031eda7ba1396096a"
}
