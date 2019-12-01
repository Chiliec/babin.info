@extends('layouts.app')

@push('head')
<script src="{{ asset('js/editor.js') }}" defer></script>
<script src="{{ asset('js/headers.js') }}" defer></script>
@endpush

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Создание нового поста</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        <div id="codex-editor"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
