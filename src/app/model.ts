export class Model {
    user;
    items;

    constructor() {
        this.user= "Yusa";
        this.items = [
                        new ToDoItem("Spor", true),
                        new ToDoItem("Kahvaltı", false),
                        new ToDoItem("Kitap Okuma", false),
                        new ToDoItem("Sinema", false),
                    ];
    }
}

export class ToDoItem {
    description;
    action;

    constructor(description: any, action: any) {
        this.description = description;
        this.action = action;
    }
}