
var J = {
    multi: true,
    searchable: true,
    placeHolder:'Select options',
    data: [
        {
        title:'Western',
        options:[
            {display:'Cake', value:'1', selected: true,disabled: false},
            {display:'Bread', value:'2', selected: false, disabled: true},
            {display:'Salad', value:'3', selected: false, disabled: false},
            {display:'Chicken', value:'4', selected: false, disabled: false},
            {display:'Beans', value:'5', selected: true, disabled: false},
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

var J1 = {
    multi: false,
    searchable: true,
    placeHolder:'Select an option',
    data: [
        {
        title:'Western',
        options:[
            {display:'Cake', value:'1', selected: false,disabled: false},
            {display:'Bread', value:'2', selected: false, disabled: true},
            {display:'Salad', value:'3', selected: false, disabled: false},
            {display:'Chicken', value:'4', selected: false, disabled: false},
            {display:'Beans', value:'5', selected: true, disabled: false},
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

(function(){
    var gf_select_style = document.createElement('style');
    gf_select_style.innerHTML = '*,.dropdown-box{box-sizing:border-box}*{font-family:"Source Sans Pro","Segoe UI","Open Sans",Calibri,sans-serif}.select-box-container{position:relative;width:250px}.select-box{cursor:pointer;border:1px solid rgba(0,0,0,.3);border-radius:3px;padding:5px 24px 5px 10px;color:#707478;font-size:12px;line-height:22px}.select-box:hover{border-color:#3C82E6;box-shadow:0 1px 2px 2px rgba(0,0,0,.06)}.select-box::after{position:absolute;right:10px;top:calc(50% - 2px);display:inline-block;content:"";height:0;width:0;background-color:transparent;border-top:6px solid #707478;border-left:6px solid transparent;border-right:6px solid transparent;transition:transform .2s ease-in-out}.expanded.select-box:after{transform:rotateZ(180deg)}.select-box .selected-number{padding-right:5px;font-size:15px;border-right:1px solid #707478}.select-box .select-box-text{padding-left:5px}.select-box:hover .select-box-text{color:rgba(0,0,0,.8)}.dropdown-box{position:absolute;left:0;width:100%;background-color:#fff;z-index:1;visibility:hidden;max-height:0;overflow:hidden}.dropdown-box.show{max-height:1000px;border:1px solid rgba(0,0,0,.3);border-radius:3px;visibility:visible;transition:max-height .2s linear}.dropdown-box .dropdown-search-box{position:relative;width:100%;border-bottom:1px solid rgba(0,0,0,.2);box-shadow:0 1px 1px 0 rgba(0,0,0,.075);line-height:32px}.dropdown-box .dropdown-search-box::after,.dropdown-box .dropdown-search-box::before{position:absolute;display:inline-block;background-color:transparent;content:"";box-sizing:border-box}.dropdown-box .dropdown-search-box::before{top:calc(50% - 8px);left:8px;height:12px;width:12px;border:1.5px solid rgba(0,0,0,.2);border-radius:50%}.dropdown-box .dropdown-search-box::after{top:calc(50% + 4px);left:13px;height:6px;width:2px;border-bottom:6px solid rgba(0,0,0,.2);border-bottom-left-radius:1px;border-bottom-right-radius:1px;transform:translateX(5px) translateY(-1px) rotate(-30deg)}.dropdown-box .dropdown-search-box input{width:100%;line-height:20px;border:none;outline:0;margin:0;padding:5px 28px;font-size:12px;box-sizing:border-box}.dropdown-box .dropdown-none-matching-box{display:none;width:100%;padding:20px;text-align:center;border-bottom:1px solid rgb(0,0,0,.3);box-sizing:border-box}.dropdown-box .dropdown-none-matching-box span{font-size:12px;color:#707478}.dropdown-box .dropdown-list-box{max-height:300px;overflow-y:scroll}.dropdown-box .dropdown-list-box::-webkit-scrollbar{width:5px}.dropdown-box .dropdown-list-box::-webkit-scrollbar-track{background:#f1f1f1}.dropdown-box .dropdown-list-box::-webkit-scrollbar-thumb{background:rgba(0,0,0,.3)}.dropdown-box .dropdown-list-box::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.4)}.dropdown-box .dropdown-list-box .group-wrapper{font-size:12px;margin:0;padding:10px 0 0;list-style:none}.dropdown-box .dropdown-list-box .group-wrapper .group-title{position:relative;display:flex;justify-content:space-between;line-height:20px;padding:5px 10px 8px}.dropdown-box .dropdown-list-box .group-wrapper .group-title b{font-size:14px}.dropdown-box .dropdown-list-box .btn{background-color:transparent;border:1px solid #707478;border-radius:3px;cursor:pointer;color:#707478;line-height:normal}.dropdown-box .dropdown-list-box .all:hover{border-color:#28a745;color:#28a745}.dropdown-box .dropdown-list-box .none:hover{border-color:#dc3545;color:#dc3545}.dropdown-box .dropdown-list-box .dropdown-select-btn-wrapper{width:100%;text-align:center;line-height:38px;border-bottom:1px solid rgba(0,0,0,.2);box-shadow:0 1px 1px 0 rgba(0,0,0,.075)}.dropdown-box .dropdown-list-box .dropdown-select-btn-wrapper .dropdown-select-btn{font-size:12px;margin:0 6px}.dropdown-box .dropdown-list-box .group-wrapper .group-select-btn{margin:0 4px;font-size:10px}.dropdown-box .dropdown-list-box .group-wrapper .option{padding:5px 5px 5px 30px;line-height:20px;position:relative;cursor:pointer}.dropdown-box .dropdown-list-box .group-wrapper .option:hover{background-color:#e0e0e0}.dropdown-box .dropdown-list-box .group-wrapper .option.disabled{cursor:not-allowed;background-color:rgba(0,0,0,.1);color:rgba(0,0,0,.4)}.dropdown-box .dropdown-list-box .group-wrapper .option::after,.dropdown-box .dropdown-list-box .group-wrapper .option::before{position:absolute;display:inline-block;left:12px;content:"";box-sizing:border-box}.dropdown-box .dropdown-list-box .group-wrapper .disabled.option::before{left:9px;top:calc(50% - 6px);width:11px;height:11px;border-radius:50%;border:1px solid rgba(0,0,0,.4);box-sizing:border-box}.dropdown-box .dropdown-list-box .group-wrapper .disabled.option::after{left:10px;top:calc(50% - 6px - 1px + 1px + 5px);width:9px;height:1px;background-color:rgba(0,0,0,.4);transform:rotateZ(-45deg)}.dropdown-box .dropdown-list-box .group-wrapper .available.single.option::before{display:none;left:10px;top:calc(50% - 4px);width:9px;height:6px;border-left:1.5px solid #707478;border-bottom:1.5px solid #707478;border-radius:.5px;transform:rotateZ(-45deg)}.dropdown-box .dropdown-list-box .group-wrapper .available.single.selected.option::before{display:inline-block;border-color:rgba(0,0,0,.8)}.dropdown-box .dropdown-list-box .group-wrapper .available.single.option:hover:before{display:inline-block}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option::after,.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option::before{display:none;left:13px;top:calc(50% - 6px);width:2px;height:10px;background-color:#707478}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option::after{transform:rotateZ(90deg)}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option:hover:after,.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option:hover:before{display:inline-block}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option.selected::before{display:inline-block;left:9px;top:calc(50% - 6px);width:12px;height:12px;border:1px solid rgba(0,0,0,.8);background-color:transparent}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option.selected::after{display:inline-block;left:12px;top:calc(50% - 6px + 3px);width:6px;height:6px;border-radius:50%;background-color:rgba(0,0,0,.8);transform:none}.dropdown-box .dropdown-list-box .group-wrapper .available.multi.option.selected:hover:after{left:11px;top:calc(50% - 6px + 5px);width:8px;height:2px;border:none;background-color:rgba(0,0,0,.8);transform:none}#triangle{display:inline-block;height:0;width:0;background-color:transparent;border-bottom:10px solid #663399;border-left:10px solid transparent;border-right:10px solid transparent;transition:transform 1s linear}#triangle.ani{transform:rotateZ(180deg)}';
    document.getElementsByTagName('head')[0].appendChild(gf_select_style);
})();

function createSelect(id,source){
    var _selectedOption;
    var _selectedOptions = [];
    var _selectedValues = [];
    var _groups = [];
    var _optionsCount = 0;

    var select = document.getElementById(id);
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
    if(source.multi){    
        var selectedNumber = document.createElement('span');
        var selectedNumberText = document.createTextNode('0');
        selectedNumber.classList.add('selected-number');
        selectedNumber.appendChild(selectedNumberText);
        selectBox.appendChild(selectedNumber);
    }
    selectBox.appendChild(selectBoxText);

    //Create dropdown box
    var dropdownBox = document.createElement('div');
    dropdownBox.classList.add('dropdown-box');
    var dropdownListBox = document.createElement('div');
    dropdownListBox.classList.add('dropdown-list-box');

    if(source.multi){
        var dropdownSelectBtnWrapper = document.createElement('div');    
        var dropdownSelectAllBtn = document.createElement('button');
        var dropdownSelectNoneBtn = document.createElement('button');
        var dropdownSelectAllBtnText = document.createTextNode('select all');
        var dropdownSelectNoneBtnText = document.createTextNode('select none');

        dropdownSelectBtnWrapper.classList.add('dropdown-select-btn-wrapper');
        dropdownSelectAllBtn.classList.add('dropdown-select-btn','btn','all');
        dropdownSelectNoneBtn.classList.add('dropdown-select-btn','btn','none');

        dropdownSelectAllBtn.appendChild(dropdownSelectAllBtnText);
        dropdownSelectNoneBtn.appendChild(dropdownSelectNoneBtnText);
        dropdownSelectBtnWrapper.appendChild(dropdownSelectAllBtn);
        dropdownSelectBtnWrapper.appendChild(dropdownSelectNoneBtn);
        dropdownListBox.appendChild(dropdownSelectBtnWrapper);
    }

    for(var i=0; i<source.data.length; i++){
        var group = source.data[i];

        //Create group wrapper and title
        var groupWrapper = document.createElement('ul');
        var groupTitleLi = document.createElement('li');
        var groupTitleB = document.createElement('b');
        var groupTitleText = document.createTextNode(group.title);

        
        //Set class for group wrapper and title
        groupWrapper.classList.add("group-wrapper");
        groupTitleLi.classList.add('group-title');

        //Append
        groupTitleB.appendChild(groupTitleText);
        groupTitleLi.appendChild(groupTitleB);
        
        if(source.multi){
            var groupSelectBtnWrapper = document.createElement('div');
            var groupSelectAllBtn = document.createElement('button');
            var groupSelectNoneBtn = document.createElement('button');
            var groupSelectAllBtnText = document.createTextNode('all');
            var groupSelectNoneBtnText = document.createTextNode('none');

            groupSelectAllBtn.classList.add('group-select-btn','btn','all');
            groupSelectNoneBtn.classList.add('group-select-btn','btn','none');

            groupSelectAllBtn.appendChild(groupSelectAllBtnText);
            groupSelectNoneBtn.appendChild(groupSelectNoneBtnText);
            groupSelectBtnWrapper.appendChild(groupSelectAllBtn);
            groupSelectBtnWrapper.appendChild(groupSelectNoneBtn);
            groupTitleLi.appendChild(groupSelectBtnWrapper);
        }
        
        groupWrapper.appendChild(groupTitleLi);


        var tempGroup = {group:groupTitleLi,options:[]};

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

            if(source.multi){
                option.classList.add('multi');
            }
            else{
                option.classList.add('single');
            }

            if(optItem.selected){
                _selectedOption = option;
                _selectedOptions.push(option);
                _selectedValues.push(optItem.value);
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

        if(source.multi){
            (function(optionElements,group){
                groupSelectAllBtn.addEventListener('click',function(event){
                    optionElements.forEach(function(item){
                        item.classList.add('selected');
                        var index = (Number)(item.getAttribute('value').split('_')[1]);
                        var itemValue = group.options[index];
                        if(_selectedValues.indexOf(itemValue.value) == -1 && !itemValue.disabled){
                            itemValue.selected = true;
                            _selectedOptions.push(item);
                            _selectedValues.push(itemValue.value);
                            selectedNumber.innerText = _selectedValues.length;
                        }                     
                    });
                    console.log(_selectedOptions);
                    console.log(_selectedValues);
                    event.stopPropagation();
                });
                groupSelectNoneBtn.addEventListener('click',function(event){
                    optionElements.forEach(function(item){
                        item.classList.remove('selected');
                        var index = item.getAttribute('value').split('_')[1];
                        var itemValue = group.options[index];
                        var itemIndex = _selectedValues.indexOf(itemValue.value);
                        if( itemIndex != -1){
                            itemValue.selected = false;
                            _selectedOptions.splice(itemIndex,1);
                            _selectedValues.splice(itemIndex,1);
                            selectedNumberText = _selectedValues.length;
                            selectedNumber.innerText = _selectedValues.length;
                        }
                    });
                    console.log(_selectedOptions);
                    console.log(_selectedValues);
                    event.stopPropagation();
                });
            })(tempGroup.options,group);
        }

        dropdownListBox.appendChild(groupWrapper);
    }

    if(source.multi){
        selectedNumber.innerHTML = _selectedValues.length;
    }

    dropdownListBox.addEventListener('click',function(event){
        if(event.target.classList.contains('option')){
            var Indexes = event.target.getAttribute('value').split('_');
            var groupIndex = (Number)(Indexes[0]);
            var optionIndex = (Number)(Indexes[1]);
            var opt = source.data[groupIndex].options[optionIndex];
    
            if(!opt.disabled){       
                if(source.multi){
                    if(opt.selected){
                        opt.selected = false;
                        event.target.classList.remove('selected');
                        _selectedOptions.splice(_selectedOptions.indexOf(event.target),1);
                        _selectedValues.splice(_selectedValues.indexOf(opt.value),1);
                    }             
                    else{
                        opt.selected = true;
                        event.target.classList.add('selected');
                        _selectedOptions.push(event.target);
                        _selectedValues.push(opt.value);
                    }  

                    selectedNumber.innerText = _selectedValues.length;
                    console.log(_selectedOptions);
                    console.log(_selectedValues);
                }
                else{
                    _selectedOption.classList.remove('selected');
                    _selectedOption = event.target;
                    _selectedOption.classList.add('selected');
                    console.log(opt.value);
                }
            }
        }

        event.stopPropagation();       
    });

    selectBox.addEventListener('click',function(event){
        setDropdownPosition();
        // dropdownBox.style.display = 'block';
        // dropdownBox.style.height = 'auto';
        selectBox.classList.remove('collapsed');
        selectBox.classList.add('expanded');
        //selectBox.classList.replace('collapsed','expanded');
        dropdownBox.classList.add('show');
        event.stopPropagation();

        function closeDropdown(event){
            if(event.target != dropdownBox && !dropdownBox.contains(event.target)){
                //dropdownBox.style.display = 'none';
                selectBox.classList.remove('expanded');
                selectBox.classList.add('collapsed');
                //selectBox.classList.replace('expanded','collapsed');
                dropdownBox.classList.remove('show');
                document.body.removeEventListener('click', closeDropdown);
            }
        }
        var dropBack = document.body.addEventListener('click', closeDropdown);
    });  

    if(source.multi){
        dropdownSelectAllBtn.addEventListener('click',function(event){
            _selectedOptions = [];
            _selectedValues = [];
            _groups.forEach(function(groupItem,groupIndex){
                groupItem.options.forEach(function(optionItem,optionIndex){               
                    optionItem.classList.add('selected');
                    _selectedOptions.push(optionItem);
                    _selectedValues.push(source.data[groupIndex].options[optionIndex].value);
                    source.data[groupIndex].options[optionIndex].selected = true;
                    selectedNumber.innerText = _selectedValues.length;
                });
            });
            console.log(_selectedOptions);
            console.log(_selectedValues);
            event.stopPropagation();   
        });

        dropdownSelectNoneBtn.addEventListener('click',function(){
            _selectedOptions = [];
            _selectedValues = [];
            _groups.forEach(function(groupItem,groupIndex){
                groupItem.options.forEach(function(optionItem,optionIndex){               
                    optionItem.classList.remove('selected');
                    source.data[groupIndex].options[optionIndex].selected = false;
                    selectedNumber.innerText = _selectedValues.length;
                });
            });
            console.log(_selectedOptions);
            console.log(_selectedValues);
        });
    }
    
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
                    if(optionItem.innerText.toLowerCase().indexOf(searchString) != -1){
                        optionItem.style.display = 'list-item';
                    }
                    else{
                        optionItem.style.display = 'none';
                        groupMatchingCounts--;
                        allMatchingCounts --;
                    }

                    if(!groupMatchingCounts){
                        groupItem.group.style.display = 'none';
                    }
                    else{
                        groupItem.group.style.display = 'flex';
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

        var selectBoxRect = selectBox.getBoundingClientRect();
        var offSetTop = selectBoxRect.top;
        var offSetBottom = window.innerHeight - selectBoxRect.top - (selectBoxRect.bottom - selectBoxRect.top);
    
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
createSelect('gaofan1',J1);