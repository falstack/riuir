@extends('layouts.app')

@section('content')
    <div id="list" v-cloak>
        <label for="">
            <input placeholder="名称" v-model="name" type="text">
        </label>
        <label for="">
            <input placeholder="账号" v-model="access" type="text">
        </label>
        <label for="">
            <input placeholder="密码" v-model="secret" type="text">
        </label>
        <button @click="submit">注册</button>
    </div>
    <script>
      new Vue({
        el: '#list',
        data () {
          return {
            access: '',
            secret: '',
            name: ''
          }
        },
        methods: {
          submit () {
            this.$http.post('/new/register', {
                name: this.name,
                access: this.access,
                secret: this.secret
            })
          }
        }
      });
    </script>
@endsection
