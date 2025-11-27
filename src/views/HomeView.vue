<template lang="">
    <article>
        <h1>Home</h1>
        <nav>
            <RouterLink :to="{ name: ROUTE_NAMES.QUIZ }">Quiz</RouterLink>
        </nav>
    </article>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ROUTE_NAMES } from "../constants/routing-constants";
</script>