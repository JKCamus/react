### Vue组件抽取及插槽

模仿AVue的组件抽取方式

```js
            <el-col :span="6" v-if="showInput">
                <div>
                    <div class="span-style" ref="inputRef">
                        <slot name="inputName"></slot>
                    </div>
                    <el-input
                        v-model="okInput"
                        class="inputStyle"
                        type="text"
                        size="medium"
                        clearable
                        placeholder="请输入任务名称"
                        :maxlength="20"
                    />
                </div>
            </el-col>

  mounted() {
        // console.log(this.$refs.inputRef.children.HTMLCollection);
        if (this.$refs.inputRef) {
            this.showInput = Boolean(this.$refs.inputRef.children.length);
            //通过判断在插槽内是否有内容，来决定决定输入是否要渲染
            // console.log(Boolean(this.$refs.inputRef.children.length));
        }
    },
    data() {
        return {
            okInput: "",
            showInput: true,
        };
    },

```



目前这套不完善，只能渲染一个输入，一个select 还有就是button

