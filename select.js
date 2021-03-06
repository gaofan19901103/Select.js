
var J = {
    multi: false,
    searchable: true,
    placeHolder:'Select an option',
    data: [
        {
        title:'Western',
        options:[
            {display:'Cake', value:'1', selected: true,disabled: false},
            {display:'Bread', value:'2', selected: false, disabled: true},
            {display:'Salad', value:'3', selected: false, disabled: false},
            {display:'Chicken', value:'4', selected: false, disabled: false},
            {display:'Beans', value:'5', selected: false, disabled: false},
            {display:'Pasta', value:'6', selected: false, disabled: false},
            {display:'Steak', value:'7', selected: false,disabled: false}
        ]},
        {
        title:'Eastern',
        options:[
            {display:'Rice', value:'8', selected: false, disabled: false},
            {display:'Vege', value:'9', selected: false, disabled: false},
            {display:'Porridge', value:'10', selected: false, disabled: false},
            {display:'Juice', value:'11', selected: false, disabled: false}
        ]}
    ]
};

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    *{
        font-family: "Source Sans Pro", "Segoe UI", "Open Sans", Calibri, sans-serif;
    }

    .select-box-container{
        position: relative;
        width: 250px;
    }

    .select-box{
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        padding: 5px 24px 5px 10px;
    }

    /* .select-box::after{
        position: absolute;
        right: 10px;
        top: calc(50% - 6px);
        transform: translateX(-4px);
        display: inline-block;
        content: '';
        width: 0px;
        height: 0px;
        border-top: 8px solid #707478;
        border-left: 8px solid transparent;
        transform: rotateZ(135deg);
    } */

    /* .select-box:hover:after{
        border-top-color: rgba(0, 0, 0, 0.8);
    } */

    /* .opened.select-box::after{
        transform: rotateZ(135deg);
    } */


    .select-box::after{
        position: absolute;
        right: 10px;
        top: calc(50% - 3px);
        display: inline-block;
        content: "";
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  fill='#707478' stroke='none'><path d='M0,0 6,6 L12,0 L0,0 Z'></path></svg>") no-repeat;
        height: 6px;
        width: 12px;
        transition: transform 0.2s ease-in-out;
    }

    .collapsed.select-box::after{
        
    }

    .expanded.select-box:after{
        transform: rotateZ(180deg);   
    }

    .collapsed.select-box:hover:after{
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  fill='rgba(0, 0, 0, 0.8)' stroke='none'><path d='M0,0 6,6 L12,0 L0,0 Z'></path></svg>") no-repeat;
    }

    /* .expanded.select-box:hover:after{
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  fill='rgba(0, 0, 0, 0.8)' stroke='none'><path d='M0,0 6,6 L12,0 L0,0 Z'></path></svg>") no-repeat;
    } */

    .select-box:hover .select-box-text{
        color:rgba(0, 0, 0, 0.8);
    }

    .select-box:hover{
        border-color: #3C82E6;
        box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.06);
    }

    .select-box-text{
        color: #707478;
        font-size: 15px;
        line-height: 22px;
    }

    .dropdown-box{ 
        position: absolute;
        /* top: 100%; */
        left:0px;
        width: 100%;
        /* border: 1px solid rgba(0, 0, 0, 0.3); */
        border-radius: 3px;
        box-sizing: border-box;
        display: block;
        visibility: hidden;
        max-height: 0px;
        overflow: hidden;
    }

    .dropdown-box.show{
        border: 1px solid rgba(0, 0, 0, 0.3);
        visibility: visible;
        max-height: 1000px;
        transition: max-height 0.2s linear;
    }

    .dropdown-box .dropdown-search-box{
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.075);
    }

    .dropdown-box .dropdown-search-box input{
        border: none;
        outline: none;
        line-height: 20px;
        font-size: 12px;
        padding: 5px 15px;
        margin: 0px;
        width:100%;
        box-sizing: border-box;
    }

    .dropdown-box .dropdown-none-matching-box{
        display: none;
        width: 100%;
        border-bottom: 1px solid rgb(0, 0, 0, 0.3);
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
    }

    .dropdown-box .dropdown-none-matching-box span{
        font-size: 12px;
        color:#707478;
    }

    .dropdown-box .dropdown-list-box{
        padding-top: 10px;
        max-height: 300px;
        overflow-y: scroll;
    }

    .dropdown-box .dropdown-list-box::-webkit-scrollbar {
        width: 5px;
    }

    .dropdown-box .dropdown-list-box::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    .dropdown-box .dropdown-list-box::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3); 
    }

    .dropdown-box .dropdown-list-box::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.4); 
    }

    .dropdown-box .dropdown-list-box .group-wrapper{
        font-size: 12px;
        margin: 0px;
        padding: 0px;
        list-style: none;
    }

    .dropdown-box .dropdown-list-box .group-wrapper .group-title{
        padding: 5px 0px 8px 10px;
        line-height: 20px;
        font-size: 14px;
        font-weight: bold;
    }

    .dropdown-box .dropdown-list-box .group-wrapper .option{
        padding: 5px 5px 5px 30px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
    }


    .dropdown-box .dropdown-list-box .group-wrapper .option.disabled{
        cursor: not-allowed;
        background-color: rgba(0, 0, 0, 0.15);
        color: rgba(0, 0, 0, 0.4);
    }

    .dropdown-box .dropdown-list-box .group-wrapper .disabled.option::before{
        position: absolute;
        left: 10px;
        top: calc(50% - 5px);
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        display: inline-block;
    }

    .dropdown-box .dropdown-list-box .group-wrapper .disabled.option::after{
        position: absolute;
        left: 11px;
        top: calc(50% - 5px + 4.5px);
        content: '';
        width: 8px;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.4);
        display: inline-block;
        transform: rotate(-45deg);
    }

    .dropdown-box .dropdown-list-box .group-wrapper .available.option::before{
        display: none;
        position: absolute;
        left: 10px;
        top: calc(50% - 3px);
        content: '';
        width: 6px;
        height: 3px;
        border-left: 1px solid #707478;
        border-bottom: 1px solid #707478;
        /* border-radius: 0.1px; */
        transform: rotateZ(-45deg);
    }

    .dropdown-box .dropdown-list-box .group-wrapper .available.selected.option::before{
        display: inline-block;
    }

    .dropdown-box .dropdown-list-box .group-wrapper .available.option:hover:before{
        display: inline-block;
    }

    .dropdown-box .dropdown-list-box .group-wrapper .option:hover{
        background-color: #e0e0e0;
    }
`;
document.getElementsByTagName('head')[0].appendChild(style);


function createSelect(id,source){
    var _selectedOption;
    var _groups = [];
    var _optionsCount = 0;

    var select = document.getElementById(id)
    select.classList.add('select-box-container');

    //Create select box
    var selectBox = document.createElement('div');
    var selectBoxText = document.createElement('span');
    var placeHolder = document.createTextNode(source.placeHolder);
    //Set select box class and append select box text
    selectBoxText.classList.add('select-box-text');
    selectBoxText.appendChild(placeHolder);
    selectBox.classList.add('collapsed');
    selectBox.classList.add('select-box');
    selectBox.appendChild(selectBoxText);

    //Create dropdown box
    var dropdownBox = document.createElement('div');
    dropdownBox.classList.add('dropdown-box');
    var dropdownListBox = document.createElement('div');
    dropdownListBox.classList.add('dropdown-list-box');

    for(var i=0; i<source.data.length; i++){
        var group = source.data[i];

        //Create group wrapper and title
        var groupWrapper = document.createElement('ul');
        var groupTitle = document.createElement('li');
        var groupTitleText = document.createTextNode(source.data[i].title);
        //Set class for group wrapper and title
        groupWrapper.classList.add("group-wrapper");
        groupTitle.classList.add('group-title');
        //Append
        var tempGroup = {group:groupTitle,options:[]};
        groupTitle.appendChild(groupTitleText);
        groupWrapper.appendChild(groupTitle);

        //Create options
        for(var j=0; j<group.options.length;j++){
            var optItem = group.options[j];

            var option = document.createElement('li');
            var optionText = document.createTextNode(optItem.display);
            option.setAttribute('value',i+'_'+j);
            option.classList.add('option'); 

            if(optItem.disabled){
                option.classList.add('disabled');
            }
            else{
                option.classList.add('available');
            }

            if(optItem.selected){
                _selectedOption = option;
                option.classList.add('selected');
            }

            // (function(optItem,option){
            //     option.addEventListener('click',function(){ 
            //         _selectedOption.classList.remove('selected');
            //         option.classList.add('selected');
            //         _selectedOption = option;
            //         selectBoxText.innerText = optItem.display;

            //         dropdownBox.classList.remove('show');
            //         selectBox.classList.replace('expanded','collapsed');
            //         console.log(optItem.value)
            //     });
            // })(optItem,option);

            _optionsCount++;
            tempGroup.options.push(option);
            option.appendChild(optionText);
            groupWrapper.appendChild(option);
        }

        _groups.push(tempGroup);
        dropdownListBox.appendChild(groupWrapper);
    }

    dropdownListBox.addEventListener('click',function(event){
        var Indexes = event.target.getAttribute('value').split('_');
        var groupIndex = (Number)(Indexes[0]);
        var optionIndex = (Number)(Indexes[1]);
        var opt = source.data[groupIndex].options[optionIndex];

        if(!opt.disabled){
            console.log(opt.value);
        }

        event.stopPropagation();       
    });

    selectBox.addEventListener('click',function(){
        setDropdownPosition();
        // dropdownBox.style.display = 'block';
        // dropdownBox.style.height = 'auto';
        selectBox.classList.replace('collapsed','expanded');
        dropdownBox.classList.add('show');
        event.stopPropagation();

        function closeDropdown(event){
            if(event.target != dropdownBox && !dropdownBox.contains(event.target)){
                //dropdownBox.style.display = 'none';
                selectBox.classList.replace('expanded','collapsed');
                dropdownBox.classList.remove('show');
                document.body.removeEventListener('click', closeDropdown);
            }
        }
        var dropBack = document.body.addEventListener('click', closeDropdown);
    });  

    
    if(source.searchable){
        var dropdownSearchBox = document.createElement('div');
        var dropdownSearchInput = document.createElement('input');
        dropdownSearchBox.classList.add('dropdown-search-box');
        dropdownSearchInput.setAttribute('type', 'text');
        dropdownSearchInput.setAttribute('placeholder','Type to search ...');

        var dropdownNoneMatchingBox = document.createElement('div');
        var dropdownNoneMatchingSpan = document.createElement('span');
        var dropdownNoneMatchingText = document.createTextNode('No matching options.');

        dropdownNoneMatchingBox.classList.add('dropdown-none-matching-box');
        dropdownNoneMatchingSpan.appendChild(dropdownNoneMatchingText);
        dropdownNoneMatchingBox.appendChild(dropdownNoneMatchingSpan);

        dropdownSearchInput.addEventListener('keyup',function(event){
            var searchString = this.value.toLowerCase();
            var allMatchingCounts = _optionsCount;

            _groups.forEach(function(groupItem){
                var groupMatchingCounts = groupItem.options.length;

                groupItem.options.forEach(function(optionItem){               
                    if(optionItem.innerText.toLowerCase().includes(searchString)){
                        optionItem.style.display = 'list-item';
                    }
                    else{
                        optionItem.style.display = 'none';
                        groupMatchingCounts--;
                        allMatchingCounts --;
                    }

                    if(!groupMatchingCounts){
                        groupItem.group.style.display = 'none'
                    }
                    else{
                        groupItem.group.style.display = 'list-item'
                    }

                    if(!allMatchingCounts){
                        dropdownNoneMatchingBox.style.display = 'block';
                        dropdownListBox.style.display = 'none';
                    }
                    else{
                        dropdownNoneMatchingBox.style.display = 'none';
                        dropdownListBox.style.display = 'block';
                    }
                });
            });   
        });

        dropdownSearchBox.appendChild(dropdownSearchInput);
        dropdownBox.appendChild(dropdownSearchBox);
        dropdownBox.appendChild(dropdownNoneMatchingBox);
    }

    dropdownBox.appendChild(dropdownListBox);
    select.appendChild(selectBox);
    select.appendChild(dropdownBox);

    function setDropdownPosition(){
        dropdownBox.style.top = 'auto';
        dropdownBox.style.bottom = 'auto';

        let selectBoxRect = selectBox.getBoundingClientRect();
        let offSetTop = selectBoxRect.top;
        let offSetBottom = window.innerHeight - selectBoxRect.top - (selectBoxRect.bottom - selectBoxRect.top);
    
        if(offSetTop > 300 && offSetBottom > 300){
            dropdownBox.style.top = '100%';
        }
        else if(offSetTop > 300){
            dropdownBox.style.bottom = '100%';
        }
        else if(offSetBottom > 300){
            dropdownBox.style.top = '100%';
        }
        if(offSetTop < 300 & offSetBottom < 300){
            // if(offSetTop > offSetBottom){
            //     dropdownListBox.style.maxHeight = (offSetTop - 10) + 'px';
            //     dropdownBox.style.top = '-' + (offSetTop - 10) + 'px';
            // }
            // else{
            //     dropdownListBox.style.maxHeight = (offSetBottom - 10) + 'px';
            //     dropdownBox.style.top = '100%';
            // }
            dropdownBox.style.top = '100%';
            dropdownListBox.style.maxHeight = (offSetBottom - 10) + 'px';
        }
    }
}



createSelect('gaofan',J);