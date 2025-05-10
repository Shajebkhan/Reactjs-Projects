function TodoItem1() {
    let itemName = "Go to college"
let date = '04/10/2024'
    return (
        <div className="container">
            <div className="row kg-row">
                <div class="col-6">
                    {itemName}
                </div>
                <div class="col-4">
                    {date}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger kg-button">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem1;